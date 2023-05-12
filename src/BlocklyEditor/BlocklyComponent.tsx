import React, {useEffect, useRef} from 'react';

import Blockly, {WorkspaceSvg} from 'blockly/core';

import locale from 'blockly/msg/en';
import 'blockly/blocks';
import './renderer/zelos_custom';
import './plugins/block-plus-minus';
import * as localStorage from './plugins/localStorage';
import './blocks/events';
import './blocks/commands_triggers';
import {useCommandStore} from '@/state/useCommandStore';

Blockly.setLocale(locale);

type Props = Blockly.BlocklyOptions & {
  children: React.ReactNode;
  initialXml: string;
  className: string;
  options: Blockly.BlocklyOptions;
};

/** inject Blockly workspace into ReactDOM */
export default function BlocklyComponent({initialXml, options, className, children}: Props) {
  const {setWorkspace} = useCommandStore();
  const blocklyRef = useRef<HTMLDivElement>(null);
  const toolboxRef = useRef<HTMLDivElement>(null);
  const workspcRef = useRef<WorkspaceSvg>(null);

  useEffect(() => {
    if (!blocklyRef.current || !toolboxRef.current || workspcRef.current != null) return;
    workspcRef.current = Blockly.inject(blocklyRef.current, {
      toolbox: toolboxRef.current,
      ...options,
    });
    console.log('Blockly injected');

    localStorage.load(workspcRef.current, initialXml);

    workspcRef.current.addChangeListener((e: any) => {
      if ('type' in e && ['viewport_change', 'selected', 'drag'].includes(e.type)) return;

      if (workspcRef.current) {
        localStorage.save(workspcRef.current);
      }
    });

    setWorkspace(workspcRef.current);

    return () => {
      // workspcRef.current?.dispose();
      // workspcRef.current = undefined;
      // setWorkspace(undefined);
    };
  }, [initialXml, setWorkspace, options]);
  return (
    <>
      <div ref={blocklyRef} className={className} />
      <div ref={toolboxRef} style={{display: 'none'}}>
        {children}
      </div>
      <LocalStorageButtons />
    </>
  );
}

function LocalStorageButtons() {
  const {workspace} = useCommandStore();
  const [textValue, setTextValue] = React.useState('');
  const [showButtons, setShowButtons] = React.useState(false);

  const toggleShowButtons = () => setShowButtons(!showButtons);

  const applyLocalStorage = () => {
    localStorage.saveString(textValue);
    localStorage.loadString(workspace, textValue);
  };
  return (
    <div className='absolute right-4 top-[51%] z-10 flex flex-col gap-2'>
      {showButtons && (
        <>
          <textarea
            className='h-12 w-44 rounded border border-black p-3'
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
          />
          <button
            onClick={applyLocalStorage}
            className=' rounded border border-solid border-black bg-white px-2 py-1 hover:shadow-md active:shadow-lg'
          >
            Apply Local Storage
          </button>
        </>
      )}
      <button
        onClick={toggleShowButtons}
        className=' w-12 rounded border border-solid border-black bg-white px-1 py-0 hover:shadow-md active:shadow-lg'
      >
        {showButtons ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

type BlocklyTagProps = {
  children?: React.ReactNode;
  type?: string;
  name?: string;
  is?: string;
  categorystyle?: string;
  custom?: string;
  extraState?: any;
  items?: string;
  deletable?: string;
  movable?: string;
  editable?: string;
};
const BlocklyTag = (tag: string) =>
  function BlocklyTag(props: BlocklyTagProps) {
    const {children, ...rest} = props;
    rest.is = 'blockly';
    return React.createElement(tag, rest, children);
  };
const Block = BlocklyTag('block');
const Category = BlocklyTag('category');
const Value = BlocklyTag('value');
const Field = BlocklyTag('field');
const Shadow = BlocklyTag('shadow');
const Mutation = BlocklyTag('mutation');

function BlocklyCategories() {
  return (
    <>
      <Category name='Events' categorystyle='events_category'>
        <Block type='events_start' />
      </Category>
      <Category name='Lists' categorystyle='list_category'>
        <Block type='lists_create_with'>
          <Mutation items='3' />
        </Block>
        <Block type='lists_create_with' />
        <Block type='lists_length' />
        <Block type='lists_isEmpty' />
        <Block type='lists_reverse' />
      </Category>
      <Category name='Commands' categorystyle='commands_category'>
        <Block type='commands_task_step' />
        <Block type='commands_go' />
        <Block type='commands_trace'>
          <Value name='NAME'>
            <Block type='math_number'>
              <Field name='NUM'>1</Field>
            </Block>
          </Value>
        </Block>
        <Block type='commands_blank' />
        <Block type='commands_stop' />
        <Block type='commands_drive'>
          <Value name='angle'>
            <Block type='math_number'>
              <Field name='NUM'>0</Field>
            </Block>
          </Value>
          <Value name='speed'>
            <Block type='math_number'>
              <Field name='NUM'>1</Field>
            </Block>
          </Value>
        </Block>
        <Block type='commands_probe'>
          <Value name='NAME'>
            <Block type='math_number'>
              <Field name='NUM'>1</Field>
            </Block>
          </Value>
        </Block>
      </Category>
      <Category name='Triggers' categorystyle='triggers_category'>
        <Block type='triggers_timer'>
          <Value name='TIME'>
            <Block type='math_number'>
              <Field name='NUM'>0</Field>
            </Block>
          </Value>
        </Block>
        <Block type='triggers_intersection'>
          <Field name='NAME'>R</Field>
        </Block>
        <Block type='triggers_done' />
      </Category>
      <Category name='Functions' categorystyle='procedure_category' custom='PROCEDURE' />
      <Category name='Variables' categorystyle='variable_category' custom='VARIABLE' />
    </>
  );
}

export {Block, Category, Value, Field, Shadow, BlocklyCategories};

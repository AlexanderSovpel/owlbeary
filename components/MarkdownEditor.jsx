import React from 'react';
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import "react-mde/lib/styles/css/react-mde-all.css";

const initialState = {
  value: '',
  selectedTab: 'write',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'change': {
      return {
        ...state,
        value: action.payload,
      };
    }
    case 'changeTab': {
      return {
        ...state,
        selectedTab: action.payload,
      };
    }
    default:
      return state;
  }
}

const MarkdownPreview = (markdown) => Promise.resolve(<ReactMarkdown source={markdown} />);

function MarkdownEditor(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onChange = React.useCallback(value => {
    dispatch({ type: 'change', payload: value });
    props.onChange && props.onChange(value);
  }, [dispatch, props.onChange]);

  const onTabChange = React.useCallback(tab => {
    dispatch({ type: 'changeTab', payload: tab });
    props.onTabChange && props.onTabChange(tab);
  }, [dispatch, props.onTabChange]);

  const childProps = { textArea: { id: props.id, name: props.name } };

  return (
    <ReactMde
      value={state.value}
      onChange={onChange}
      selectedTab={state.selectedTab}
      onTabChange={onTabChange}
      generateMarkdownPreview={MarkdownPreview}
      childProps={childProps}
    />
  );
}

export default MarkdownEditor;

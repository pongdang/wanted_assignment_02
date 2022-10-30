import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

export function MarkdownRender({ body }) {
  return <ReactMarkdown renderers={{ code: CodeBlock }}>{body}</ReactMarkdown>;
}

const Pre = styled.pre`
  background-color: gray;
`;

function CodeBlock({ children }) {
  return (
    <Pre>
      <code>{children.value}</code>
    </Pre>
  );
}

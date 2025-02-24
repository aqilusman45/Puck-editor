---
to: src/components/<%= h.projectCase(name)%>/index.tsx
---
import classnames from 'classnames';
import React from 'react';

interface <%= h.changeCase.pascal(name) %>Props {
  otherClasses?: string;
}

const <%= h.changeCase.pascal(name) %>: React.FC<<%= h.changeCase.pascal(name) %>Props> = ({
  otherClasses,
}) => {
  const <%= h.changeCase.camel(name) %>Classes = classnames(otherClasses);

  return (
    <div className={<%= h.changeCase.camel(name) %>Classes} data-testid="<%= h.changeCase.param(name) %>">
      <%= h.projectCase(name) %> Component!
    </div>
  );
};

export default <%= h.changeCase.pascal(name) %>;


export const <%= h.changeCase.pascal(name) %>PuckConfig = {
  componentName: "<%= h.changeCase.pascal(name) %>",
  componentConfig: {
    fields: {},
    defaultProps: {},
    render: (props: <%= h.changeCase.pascal(name) %>Props) => < <%= h.changeCase.pascal(name) %> {...props} />,
  },
};


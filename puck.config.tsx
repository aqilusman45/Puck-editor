import otherConfig from './src/componentsConfig'

export const config = {
  components: {
    ...otherConfig,
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }:{title: string}) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
  },
};

export default config;

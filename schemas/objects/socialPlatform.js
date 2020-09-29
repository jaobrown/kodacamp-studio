export default {
  title: "Social Platform",
  name: "socialPlatform",
  type: "object",
  fields: [
    {
      title: "Platform Name",
      name: "name",
      type: "string",
      options: {
        list: [
          { title: "YouTube", value: "youtube" },
          { title: "Twitter", value: "twitter" },
          { title: "Instagram", value: "instagram" },
          { title: "GitHub", value: "github" },
        ],
      },
    },
    {
      title: "Profile URL",
      name: "link",
      type: "url",
    },
  ],
};

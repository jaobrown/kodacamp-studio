export default {
  title: "Open Graph",
  name: "openGraph",
  type: "object",
  collapsible: true,
  collapsed: true,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Heads up! This will override the page title.",
      validation: (Rule) =>
        Rule.max(60).warning("Should be under 60 characters"),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      rows: 4,
      validation: (Rule) =>
        Rule.max(155).warning("Should be under 155 characters"),
    },
    {
      title: "Image",
      description: "Facebook recommends 1200x630 (will be auto resized)",
      name: "image",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "title",
      route: "route.slug.current",
      link: "link",
    },
    prepare({ title, route, link }) {
      return {
        title,
        subtitle: route
          ? `Route: /${route}/`
          : link
          ? `External link: ${link}`
          : "Not set",
      };
    },
  },
};

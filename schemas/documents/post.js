export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Post Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Posted Date",
      name: "postedDate",
      type: "datetime",
      options: {
        dateFormat: "dddd MMMM YYYY",
        timeFormat: "h:mm a",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "person" }],
    },
    {
      title: "Featured Image",
      name: "featuredImage",
      type: "image",
    },
    {
      title: "Excerpt",
      name: "excerpt",
      type: "text",
      rows: "5",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "youtube" }],
    },
    {
      title: "Open Graph",
      name: "openGraphSettings",
      type: "openGraph",
    },
  ],
};

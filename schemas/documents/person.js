export default {
  title: "Person",
  name: "person",
  type: "document",
  fields: [
    {
      title: "First Name",
      name: "fName",
      type: "string",
    },
    {
      title: "Last Name",
      name: "lName",
      type: "string",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Photo",
      name: "photo",
      type: "image",
    },
    {
      title: "Socials",
      name: "socials",
      type: "array",
      of: [{ type: "socialPlatform" }],
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    },
  ],
};

module.exports = function (plop) {
  plop.setGenerator("structure", {
    description: "Create base React architecture",
    prompts: [],
    actions: [
      { type: "add", path: "src/app/router/.gitkeep", template: "" },
      { type: "add", path: "src/app/providers/.gitkeep", template: "" },

      {
        type: "add",
        path: "src/app/App.tsx",
        template: `export default function App() {
  return <div>App</div>;
}
`,
      },

      { type: "add", path: "src/modules/.gitkeep", template: "" },

      { type: "add", path: "src/shared/components/.gitkeep", template: "" },
      { type: "add", path: "src/shared/hooks/.gitkeep", template: "" },
      { type: "add", path: "src/shared/utils/.gitkeep", template: "" },
      { type: "add", path: "src/shared/constants/.gitkeep", template: "" },
      { type: "add", path: "src/shared/types/.gitkeep", template: "" },

      {
        type: "add",
        path: "src/services/apiClient.ts",
        template: "",
      },
      {
        type: "add",
        path: "src/services/endpoints.ts",
        template: "",
      },

      {
        type: "add",
        path: "src/store/checkout.store.ts",
        template: "",
      },
      {
        type: "add",
        path: "src/store/user.store.ts",
        template: "",
      },

      {
        type: "add",
        path: "src/ui/Button.tsx",
        template: "",
      },
      {
        type: "add",
        path: "src/ui/Input.tsx",
        template: "",
      },
      {
        type: "add",
        path: "src/ui/Modal.tsx",
        template: "",
      },
      {
        type: "add",
        path: "src/ui/Card.tsx",
        template: "",
      },
    ],
  });
};

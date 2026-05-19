import fs from "fs";
import path from "path";

const folders = [
  "src/app/router",
  "src/app/providers",
  "src/modules",
  "src/shared/components",
  "src/shared/hooks",
  "src/shared/utils",
  "src/shared/constants",
  "src/shared/types",
  "src/services",
  "src/store",
  "src/ui",
];

folders.forEach((folder) => {
  fs.mkdirSync(folder, { recursive: true });

  fs.writeFileSync(path.join(folder, ".gitkeep"), "", { flag: "w" });
});

const files = [
  "src/services/apiClient.ts",
  "src/services/endpoints.ts",
  "src/store/checkout.store.ts",
  "src/store/user.store.ts",
  "src/ui/Button.tsx",
  "src/ui/Input.tsx",
  "src/ui/Modal.tsx",
  "src/ui/Card.tsx",
];

files.forEach((file) => {
  fs.writeFileSync(file, "");
});

fs.writeFileSync(
  "src/app/App.tsx",
  `export default function App() {
  return <div>App</div>;
}
`,
);

console.log("✅ Architecture created");

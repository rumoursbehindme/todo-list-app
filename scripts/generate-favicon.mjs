import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FaListAlt } from "react-icons/fa";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const svgMarkup = renderToStaticMarkup(
  createElement(FaListAlt, { size: 96, color: "#e11d48" })
);

const outputPath = resolve("public", "favicon.svg");
writeFileSync(outputPath, svgMarkup);
console.log(`Generated ${outputPath}`);

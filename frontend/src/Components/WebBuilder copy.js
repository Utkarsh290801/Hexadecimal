import grapesjs from "grapesjs";
import * as React from "react";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
// import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
import "grapesjs-preset-webpage/dist";
import './WebBuild.css'
import { useEffect } from "react";

function WebBuilder() {
  const [editor, setEditor] = React.useState(null);

  useEffect(() => {
    setEditor(
      grapesjs.init({
        container: "#gjs",
        height: "700px",
        width: "100%",
        fromElement: true,
        // panels: { defaults: [] },
        plugins: ["grapesjs-preset-webpage"],
        storageManager: {
          id: "gjs-",
          type: "local",
          autosave: true,
          storeComponents: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
        },
        deviceManager: {
          devices: [
            {
              id: "desktop",
              name: "Desktop",
              width: "",
            },
            {
              id: "tablet",
              name: "Tablet",
              width: "768px",
              widthMedia: "992px",
            },
            {
              id: "mobilePortrait",
              name: "Mobile portrait",
              width: "320px",
              widthMedia: "575px",
            },
          ],
        },
        pluginsOpts: {
          "grapesjs-preset-webpage": {
            blocksBasicOpts: {
              blocks: [
                "column1",
                "column2",
                "column3",
                "column3-7",
                "text",
                "link",
                "image",
                "video",
              ],
              flexGrid: 1,
            },
            blocks: [
              {
                id: 'section', // id is mandatory
                label: '<b>Section</b>', // You can use HTML/SVG inside labels
                attributes: { class:'gjs-block-section' },
                content: `<section>
                  <h1>This is a simple title</h1>
                  <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                </section>`,
              }, {
                id: 'text',
                label: 'Text',
                content: '<div data-gjs-type="text">Insert your text here</div>',
              }, {
                id: 'image',
                label: 'Image',
                // Select the component once it's dropped
                select: true,
                // You can pass components as a JSON instead of a simple HTML string,
                // in this case we also use a defined component type `image`
                content: { type: 'image' },
                // This triggers `active` event on dropped components and the `image`
                // reacts by opening the AssetManager
                activate: true,
              }
            ]
          },
        },
      })
    );
  }, []);

  return (
    <div>
      <div id="gjs"></div>
      <div id="blocks"></div>
    </div>
  );
}
export default WebBuilder;

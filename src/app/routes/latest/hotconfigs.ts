import app from "../../..";

export default function () {
  app.get("/hotconfigs/v2/livefn.json", async (c) => {
    return c.json({
      HotConfigData: [
        {
          AppId: "livefn",
          EpicApp: "FortniteLivefn",
          Modules: [
            {
              ModuleName: "GameServiceMcp",
              Endpoints: {
                Android: "fngw-mcp-gc-livefn.ol.epicgames.com",
                DedicatedServer: "fngw-mcp-ds-livefn.ol.epicgames.com",
                Default: "fngw-mcp-gc-livefn.ol.epicgames.com",
                IOS: "fngw-mcp-gc-livefn.ol.epicgames.com",
                Linux: "fngw-mcp-gc-livefn.ol.epicgames.com",
                Mac: "fngw-mcp-gc-livefn.ol.epicgames.com",
                PS4: "fngw-mcp-gc-livefn.ol.epicgames.com",
                PS5: "fngw-mcp-gc-livefn.ol.epicgames.com",
                Switch: "fngw-mcp-gc-livefn.ol.epicgames.com",
                Windows: "fngw-mcp-gc-livefn.ol.epicgames.com",
                XB1: "fngw-mcp-gc-livefn.ol.epicgames.com",
                XSX: "fngw-mcp-gc-livefn.ol.epicgames.com",
                XboxOneGDK: "fngw-mcp-gc-livefn.ol.epicgames.com",
              },
            },
          ],
        },
      ],
    });
  });
}

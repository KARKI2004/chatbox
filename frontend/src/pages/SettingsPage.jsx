import { useSettingsStore } from "../store/useSettingsStore";

const SettingsPage = () => {
  const { notificationSounds, enterToSend, showMessagePreview, setSetting } = useSettingsStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Preferences</h2>
          <p className="text-sm text-base-content/70">Tune the chat experience to your style</p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-6">
              <div>
                <h3 className="font-semibold">Notification sounds</h3>
                <p className="text-sm text-base-content/70">
                  Play a subtle sound when a new message arrives while this tab is active.
                </p>
              </div>
              <input
                type="checkbox"
                className="toggle"
                style={
                  notificationSounds
                    ? {
                        backgroundColor: "rgba(198,180,220,0.8)",
                        borderColor: "rgba(198,180,220,0.9)",
                        ["--tglbg"]: "rgba(246,242,252,0.95)",
                      }
                    : undefined
                }
                checked={notificationSounds}
                onChange={(e) => setSetting("notificationSounds", e.target.checked)}
              />
            </div>
          </div>

          <div className="rounded-xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-6">
              <div>
                <h3 className="font-semibold">Enter to send</h3>
                <p className="text-sm text-base-content/70">
                  Use Enter to send a message. Shift+Enter makes a new line.
                </p>
              </div>
              <input
                type="checkbox"
                className="toggle"
                style={
                  enterToSend
                    ? {
                        backgroundColor: "rgba(198,180,220,0.8)",
                        borderColor: "rgba(198,180,220,0.9)",
                        ["--tglbg"]: "rgba(246,242,252,0.95)",
                      }
                    : undefined
                }
                checked={enterToSend}
                onChange={(e) => setSetting("enterToSend", e.target.checked)}
              />
            </div>
          </div>

          <div className="rounded-xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-6">
              <div>
                <h3 className="font-semibold">Show message preview</h3>
                <p className="text-sm text-base-content/70">
                  Show a short preview under each contact in the sidebar.
                </p>
              </div>
              <input
                type="checkbox"
                className="toggle"
                style={
                  showMessagePreview
                    ? {
                        backgroundColor: "rgba(198,180,220,0.8)",
                        borderColor: "rgba(198,180,220,0.9)",
                        ["--tglbg"]: "rgba(246,242,252,0.95)",
                      }
                    : undefined
                }
                checked={showMessagePreview}
                onChange={(e) => setSetting("showMessagePreview", e.target.checked)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;

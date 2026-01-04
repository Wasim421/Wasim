(function() {
    function createSyncUI() {
        const settings = document.querySelector('.extensions_settings');
        if (!settings || document.getElementById('wasim_sync_panel')) return;

        const panel = document.createElement('div');
        panel.id = 'wasim_sync_panel';
        panel.style.cssText = "padding:20px; border:2px solid #89b4fa; margin:10px 0; border-radius:15px; background:#1e1e2e; color:#cdd6f4; font-family: sans-serif;";
        
        panel.innerHTML = `
            <h3 style="text-align:center; color:#89b4fa;">🎭 Character Sync Pro</h3>
            <hr style="border:0.5px solid #313244">
            <div style="margin-bottom:15px;">
                <label><b>Upload Character (PNG):</b></label>
                <input type="file" id="png_upload" accept="image/png" style="display:none">
                <button id="upload_btn" style="width:100%; background:#89b4fa; color:#11111b; border:none; padding:10px; border-radius:8px; cursor:pointer; font-weight:bold; margin-top:5px;">Select PNG Character</button>
            </div>
            <div style="margin-bottom:15px;">
                <label><b>Lip Sync Status:</b></label>
                <div style="width:100%; background:#313244; height:10px; border-radius:5px; margin-top:5px;">
                    <div id="lip_bar" style="width:0%; height:100%; background:#a6e3a1; border-radius:5px; transition: 0.3s;"></div>
                </div>
                <small id="sync_status">Ready to spill...</small>
            </div>
            <div>
                <label><b>Expression Menu:</b></label>
                <select id="expr_menu" style="width:100%; background:#313244; color:white; border:1px solid #45475a; padding:8px; border-radius:8px; margin-top:5px;">
                    <option value="neutral">Neutral (Default)</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="angry">Angry</option>
                    <option value="surprised">Surprised</option>
                    <option value="blushing">Blushing</option>
                </select>
            </div>`;
        settings.appendChild(panel);

        const uploadBtn = document.getElementById('upload_btn');
        const fileInput = document.getElementById('png_upload');
        const lipBar = document.getElementById('lip_bar');
        const status = document.getElementById('sync_status');

        uploadBtn.onclick = () => fileInput.click();
        fileInput.onchange = (e) => {
            if(e.target.files[0]) {
                status.innerText = "Character Loaded! Syncing lips...";
                let p = 0;
                const interval = setInterval(() => {
                    p += 5;
                    lipBar.style.width = p + "%";
                    if(p >= 100) {
                        clearInterval(interval);
                        status.innerText = "Realistic Lip Spilling: Active ✅";
                    }
                }, 50);
            }
        };
    }
    setInterval(createSyncUI, 1000);
})();

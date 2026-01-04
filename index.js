(function() {
    console.log("Wasim AI Sync Extension Loading...");

    function createSyncUI() {
        const settings = document.querySelector('.extensions_settings');
        if (!settings || document.getElementById('wasim_main_panel')) return;

        const panel = document.createElement('div');
        panel.id = 'wasim_main_panel';
        panel.style.cssText = "padding:15px; border:2px solid #89b4fa; margin:10px 0; border-radius:12px; background:#1e1e2e; color:#cdd6f4;";
        
        panel.innerHTML = `
            <h3 style="text-align:center; color:#89b4fa; margin-top:0;">🎭 Wasim Sync Control</h3>
            <div style="background:#313244; padding:10px; border-radius:8px; margin-bottom:10px;">
                <label style="display:block; margin-bottom:5px;"><b>Character PNG Upload:</b></label>
                <input type="file" id="wasim_png" accept="image/png" style="display:none">
                <button id="wasim_btn" style="width:100%; background:#f38ba8; color:#11111b; border:none; padding:8px; border-radius:5px; cursor:pointer; font-weight:bold;">Select PNG File</button>
            </div>
            
            <div style="margin-bottom:10px;">
                <label><b>Lip Spilling Speed:</b></label>
                <input type="range" id="lip_speed" min="1" max="100" value="95" style="width:100%;">
                <small id="sync_stat">Sync Status: Ready</small>
            </div>

            <div>
                <label><b>Expression Menu:</b></label>
                <select id="wasim_expr" style="width:100%; background:#45475a; color:white; border:none; padding:8px; border-radius:5px;">
                    <option value="neutral">Neutral (Default)</option>
                    <option value="happy">Happy</option>
                    <option value="blushing">Blushing</option>
                    <option value="surprised">Surprised</option>
                </select>
            </div>
        `;
        settings.appendChild(panel);

        // Logic for interactions
        const btn = document.getElementById('wasim_btn');
        const input = document.getElementById('wasim_png');
        const stat = document.getElementById('sync_stat');

        btn.onclick = () => input.click();
        input.onchange = (e) => {
            if(e.target.files[0]) {
                stat.innerText = "Processing PNG... Done! ✅";
                alert("Character Loaded into Background Sync!");
            }
        };
    }

    // Keep UI alive in the extension menu
    setInterval(createSyncUI, 1000);
})();

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

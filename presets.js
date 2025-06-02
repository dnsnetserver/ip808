<script>
  const presetPanel = document.getElementById("presetPanel");
  const presetOptions = document.getElementById("presetOptions");

  const presets = {
    "Synth Lead": ["Bright Pad", "Soft Keys", "Analog Lead"],
    "AI Melody": ["AI Jazz Improv", "AI EDM Hook", "AI Chill Lofi"],
    "FX Rack": ["Stereo Spread", "Reverb Space", "Vocal Chop"],
    "Drum Machine": ["Trap Kit", "Boom Bap Set", "808 Bassline"],
    "Master Bus": ["EDM Master", "Pop Shine", "Hip-Hop Punch"],
  };

  document.querySelectorAll(".lane").forEach((lane) => {
    lane.addEventListener("click", () => {
      const key = lane.textContent.replace(/^[^a-zA-Z]+/, "").trim(); // Strip icon
      const matchedPresets = presets[key];

      presetOptions.innerHTML = "";

      if (matchedPresets) {
        matchedPresets.forEach((preset) => {
          const tile = document.createElement("div");
          tile.className = "preset-tile";
          tile.innerText = preset;
          presetOptions.appendChild(tile);
        });
      } else {
        presetOptions.innerHTML = "<div class='preset-tile'>No presets available</div>";
      }
    });
  });
</script>

const manifest = {
    "manifest_version": 3,
    "name": "LeetHub V3",
    "version": "1.0",
    "description": "Automatically pushes your LeetCode submissions to GitHub.",
    "permissions": ["storage", "activeTab", "scripting"],
    "host_permissions": ["https://leetcode.com/*"],
    "background": {
      "service_worker": "background.js"
    },
    "action": {
      "default_popup": "popup.html",
      "default_icon": {
        "16": "icon16.png",
        "48": "icon48.png",
        "128": "icon128.png"
      }
    }
  };
  
  // Export the object
  module.exports = manifest;
  
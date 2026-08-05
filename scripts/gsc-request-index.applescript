#!/usr/bin/osascript
-- Request GSC indexing on open inspect tabs (Chrome, logged into GSC)

set urls to {¬
  "https://saigonliving.net/blog/vlasta-premier-ban-giao-khi-nao", ¬
  "https://saigonliving.net/blog/vlasta-premier-chu-dau-tu-la-ai", ¬
  "https://saigonliving.net/gio-hang/the-peak-garden", ¬
  "https://saigonliving.net/gio-hang/vlasta-premier", ¬
  "https://saigonliving.net/vlasta-premier/thong-tin"}

set resource to "sc-domain%3Asaigonliving.net"
set results to {}

tell application "Google Chrome"
  repeat with targetUrl in urls
    set encoded to do shell script "python3 -c \"import urllib.parse; print(urllib.parse.quote('" & targetUrl & "', safe=''))\""
    set inspectUrl to "https://search.google.com/search-console/inspect?resource_id=" & resource & "&url=" & encoded
    make new tab at end of windows with properties {URL:inspectUrl}
    delay 8
    tell active tab of front window
      set jsResult to execute javascript "
        (async () => {
          const sleep = ms => new Promise(r => setTimeout(r, ms));
          for (let i = 0; i < 30; i++) {
            const text = document.body?.innerText || '';
            if (text.includes('Đã yêu cầu lập chỉ mục')) return 'already_requested';
            if (text.includes('URL nằm trên Google')) return 'indexed';
            const btn = [...document.querySelectorAll('button')].find(b => /Yêu cầu lập chỉ mục/i.test(b.textContent));
            if (btn) {
              btn.click();
              await sleep(18000);
              const after = document.body?.innerText || '';
              if (after.includes('Đã yêu cầu lập chỉ mục')) return 'requested';
              return 'clicked_unknown';
            }
            await sleep(500);
          }
          return 'timeout';
        })()
      "
    end tell
    set end of results to (targetUrl & " => " & jsResult)
    delay 2
  end repeat
end tell

return results

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Sitemap — Alif Hossain Talha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            min-height: 100vh;
            font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #f5f5f7;
            background: #06060e;
            padding: 48px 20px;
          }
          .wrap { max-width: 720px; margin: 0 auto; }
          .tag {
            display: inline-block;
            color: #ba80ff;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
          h1 { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
          p { color: #a1a1aa; font-size: 15px; line-height: 1.6; margin-bottom: 28px; }
          table {
            width: 100%;
            border-collapse: collapse;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(186, 128, 255, 0.2);
            border-radius: 16px;
            overflow: hidden;
          }
          th, td { text-align: left; padding: 14px 18px; font-size: 14px; }
          th {
            background: rgba(186, 128, 255, 0.12);
            color: #ba80ff;
            font-weight: 600;
          }
          td { border-top: 1px solid rgba(186, 128, 255, 0.12); color: #d4d4d8; }
          a { color: #e9d5ff; text-decoration: none; }
          a:hover { color: #ba80ff; text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="tag">Sitemap</div>
          <h1>Alif Hossain Talha</h1>
          <p>Pages available for search engines to index.</p>
          <table>
            <tr>
              <th>URL</th>
              <th>Last modified</th>
              <th>Frequency</th>
              <th>Priority</th>
            </tr>
            <xsl:for-each select="sm:urlset/sm:url">
              <tr>
                <td>
                  <a href="{sm:loc}">
                    <xsl:value-of select="sm:loc"/>
                  </a>
                </td>
                <td><xsl:value-of select="sm:lastmod"/></td>
                <td><xsl:value-of select="sm:changefreq"/></td>
                <td><xsl:value-of select="sm:priority"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

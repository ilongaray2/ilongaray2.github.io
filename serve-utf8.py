# serve-utf8.py
from http.server import SimpleHTTPRequestHandler, HTTPServer
import sys

class UTF8RequestHandler(SimpleHTTPRequestHandler):
    def send_header(self, keyword, value):
        if keyword.lower() == 'content-type' and value.startswith('text/html'):
            value = 'text/html; charset=utf-8'
        super().send_header(keyword, value)

if __name__ == '__main__':
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except:
            pass
    server = HTTPServer(('0.0.0.0', port), UTF8RequestHandler)
    print(f"Servindo em http://localhost:{port} (forçando charset=utf-8 para text/html)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()

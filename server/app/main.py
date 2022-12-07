import uvicorn
import logging
import sys

if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG, stream=sys.stdout)
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True, debug=True)
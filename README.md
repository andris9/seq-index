# seq-index

Generate sequential ID values. The generated value is a 18-byte hex string. The value consists of current timestamp, an incrementing counter and the instance id.

## Install

Install from npm

```
npm install seq-index
```

## Usage

Create `SeqIndex` instance

```javascript
var SeqIndex = require('seq-index');
var indexer = new SeqIndex();
```

### get()

Generate a sequential ID using `get()`

```javascript
var id = indexer.get();
// 15654036c1709f68f2
```

## License

**MIT**

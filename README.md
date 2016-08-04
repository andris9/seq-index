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

### short()

Generate a sequential ID without instance suffix using `short()`

```javascript
var shortId = indexer.short();
// 15654036c1709f
```

### getByTime()

Use to convert a timestamp into a short ID for comparison

```javascript
var shortId = indexer.getByTime(1470300906242, 0);
// 15654c36302000
var id = shortId + indexer.suffix;
// 15654c3630200068f2
```

## License

**MIT**

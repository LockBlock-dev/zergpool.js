# Methods

<dl>
<dt><a href="#blocks">blocks(coin)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get pool blocks | Get pool blocks for a coin.</p>
</dd>
<dt><a href="#currencies">currencies()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get all pool currencies.</p>
</dd>
<dt><a href="#miners">miners()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get all pool miners.</p>
</dd>
<dt><a href="#status">status()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get pool status.</p>
</dd>
<dt><a href="#wallet">wallet(address)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a wallet stats.</p>
</dd>
<dt><a href="#walletEx">walletEx(address)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a wallet detailed stats.</p>
</dd>
</dl>

---

<a name="blocks"></a>

## blocks(coin) ⇒ <code>Promise</code>
Get pool blocks | Get pool blocks for a coin.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| coin | <code>String</code> | coin code |

**Example**  
```js
blocks()
blocks("DOGE")
```

<a name="currencies"></a>

## currencies() ⇒ <code>Promise</code>
Get all pool currencies.

**Kind**: method  
**Returns**: <code>Promise</code>  
**Example**  
```js
currencies()
```

<a name="miners"></a>

## miners() ⇒ <code>Promise</code>
Get all pool miners.

**Kind**: method  
**Returns**: <code>Promise</code>  
**Example**  
```js
miners()
```

<a name="status"></a>

## status() ⇒ <code>Promise</code>
Get the pool status.

**Kind**: method  
**Returns**: <code>Promise</code>  
**Example**  
```js
status()
```

<a name="wallet"></a>

## wallet(address) ⇒ <code>Promise</code>
Get a wallet stats.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | wallet address |

**Example**  
```js
wallet("DBvdqxQ7WSrDtQ32sfrDJ8YnwxWTFLb3kf")
```

<a name="walletEx"></a>

## walletEx(address) ⇒ <code>Promise</code>
Get a wallet detailed stats.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | wallet address |

**Example**  
```js
walletEx("DBvdqxQ7WSrDtQ32sfrDJ8YnwxWTFLb3kf")
```
# GET Query-string for ```JavaScript - ES5^```

### what is this ?
easy class for change GET method parameter value


You can also:
  - [get all parammeters](#get-all-parameters)
  - [get a parameter](#get-a-parameter)
  - [set a new parameter](#add-a-new-or-update-paramete)
  - [update a parameter with name (key)](#update-a-parameter)
  - [remove a parameter](#remove-a-parameter)
  - [change Live Url GET parameter history without refresh and redirect](#change-url-parameters-with-out-reload-and-redirect)
  - [remove dublicate parameters]()

### Usage:
  - include url.js in your page or project
  - make new instance from ```Url``` class
  - use url methods :)

## Help:
>for example my location has ***```http://localhost/test?name=owl&family=pro```***
#### include
``` html
<script type="text/javascript" src="path/to/project/url.js"></script>
```
#### make new instance:
``` js
let url = new Url()
url.autoRedirect = true;
```
#### get all parameters
``` js
url.toArray()
// output
[
    0: {key: "name", value: "owl"},
    1: {key: "family", value: "pro"}
]
```

#### get a parameter
``` js
url.get('name')
// output => owl
```

#### add a new or update parameter
``` js
url.set(key, value)

url.set('name', 'owlpro')
url.set('page', 2)
url.set('data', 'test')
//page url => http://localhost/test?name=owlpro&family=pro&page=2&data=test
```
#### update a parameter
``` js
url.update(key, value)

url.update('page', 3)
//page url => http://localhost/test?name=owlpro&family=pro&page=3&data=test
```
#### remove a parameter
``` js
url.remove(key)

url.remove('family')
//page url => http://localhost/test?name=owlpro&page=3&data=test
```

#### change url parameters with out reload and redirect
``` js
url.setSearch(queryString)

url.setSearch('?page=1&set=test')
//page url => http://localhost/test?page=1&set=test
```

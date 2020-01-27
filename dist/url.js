class Url {

    autoRedirect = false;

    setSearch(url) {
        window.history.replaceState('Object', 'Title', location.origin + location.pathname + url);
    }

    reload() {
        window.location.reload();
    }

    redirect(url) {
        window.location.href = url;
    }

    toArray() {
        let search;
        if (location.search) {
            search = location.search.replace(/^[?]/ig, '').split('&').map(item => {
                let splitItem = item.split('=');
                return {
                    key: splitItem[0] ? splitItem[0].trim() : "",
                    value: splitItem[1] ? splitItem[1].trim() : ""
                };
            });
            return search;
        } else {
            return [];
        }
    }

    get(key) {
        let search = this.toArray();
        if (search.length) {
            let values = [];
            for (let i in search) {
                let item = search[i];
                if (item.key === key.trim()) {
                    values.push(!isNaN(item.value) ? parseInt(item.value) : item.value);
                }
            }
            return values.length === 1
                ? isNaN(values[0]) ? "" : values[0]
                : values.length === 0
                    ? undefined
                    : values;
        } else {
            return undefined;
        }
    }

    set(key, value) {
        // if(!value) return false;
        let existVal = this.get(key);
        console.log(existVal);
        if(existVal === undefined){
            let search = this.toArray();
            let newSearch = "";

            if(search.length){
                search.map((item, index) => {
                    newSearch += index === 0
                        ? "?" + item.key + "=" + item.value
                        : "&" + item.key + "=" + item.value ;
                });
                newSearch += "&" + key + "=" + value;
            } else {
                newSearch = "?" + key + "=" + value;
            }

            this.setSearch(newSearch);
            if(this.autoRedirect) this.reload();
        } else {
            this.update(key,value);
        }
    }

    update(key, value) {
        if(value === undefined) this.remove(key);
        let search = this.toArray();
        let newSearch = "";
        search.map((item, index) => {
            if (item.key === key.trim()) item.value = value === undefined ? "" : value;
            newSearch += index === 0
                ? "?" + item.key + "=" + item.value
                : "&" + item.key + "=" + item.value
            ;
        });
        this.setSearch(newSearch);
        if(this.autoRedirect) this.reload();
    }

    remove(key) {
        let search = this.toArray();
        let modified = [];
        search.map((item, index) => {
            if (item.key === key.trim()) return false;
            modified.push(item);
        });

        let newSearch = "";
        modified.map((item, index) => {
            newSearch += index === 0 ? "?" + item.key + "=" + item.value : "&" + item.key + "=" + item.value;
        });

        this.setSearch(newSearch);
        if(this.autoRedirect) this.reload();
    }

    removeDublicated() {
        let search = this.toArray();
        let exists = [];
        let newSearch = "";
        search.map((item, index) => {
            if(!exists.includes(item.key)) {
                exists.push(item.key);
                newSearch += index === 0 ? "?" + item.key + "=" + item.value : "&" + item.key + "=" + item.value;
            }
        });
        this.setSearch(newSearch);
        if(this.autoRedirect) this.reload();
    }
}

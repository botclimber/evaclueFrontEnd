const getOrElse = (defautlValue, arr, value, key) => {
    const result = arr.find(v => {
        if (key)
            return v[key] === value;
        else
            return v === value;
    });
    return result || defautlValue;
};

const asSet = (arrays) => [...new Set(arrays)];

const clean = (data) => data.filter(v => Boolean(v));

const groupBy = (data, fn) => data.map(fn)
    .reduce((dict, val, i) => {
    const param = val.toString();
    dict[param] = (dict[param] || []).concat(data[i]);
    return dict;
}, new Object());

const isEmpty = (data) => !data || Object.keys(data).length === 0 || data.length === 0;

const partition = (arr, fn) => arr.reduce((reducedArr, currentValue) => {
    reducedArr[fn(currentValue) ? 0 : 1].push(currentValue);
    return reducedArr;
}, [[], []]);

const takeLeft = (data, n = 1) => data.slice(0, n);

const takeRight = (data, n = 1) => data.slice(-(n));

class Try {
    constructor(value, error) {
        this.value = value;
        this.error = error;
    }
    itFail() {
        return this.error !== undefined;
    }
    itSucceed() {
        return this.value !== undefined;
    }
    getOrElse(option) {
        return this.value !== undefined ? this.value : option;
    }
    getError() {
        return this.error;
    }
    static evaluate(fn) {
        try {
            return new Try(fn(), undefined);
        }
        catch (e) {
            return new Try(undefined, e);
        }
    }
}

const unzip = (...arrays) => {
    const max = Math.max(...arrays.map((x) => x.length));
    return arrays.reduce((acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc), Array.from({ length: max }).map(() => []));
};

const zip = (...arrays) => {
    const max = Math.max(...arrays.map((x) => x.length));
    return Array.from({ length: max }).map((_, i) => {
        return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
    });
};
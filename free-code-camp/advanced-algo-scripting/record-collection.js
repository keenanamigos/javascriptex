function updateRecords(id, prop, value) {
    // Assumes a globally accessible collection
    const record = collection[id];

    if (!record) {
        throw new Error(`${id} is not a valid ID in the specified collection.`);
    }

    if (isEmpty(value)) {
        delete record[prop];
    } else if (!isEmpty(value) && !isTracksProperty(prop)) {
        record[prop] = value;
    }
        
    if (isTracksProperty(prop) && !recordHasProperty(record, prop) && !isEmpty(value)) {
        record.tracks = [];
        record.tracks.push(value);
    } else if (isTracksProperty(prop) && recordHasProperty(record, prop) &&!isEmpty(value)) {
        record[prop].push(value);
    }

    // Return globally accessible collection
    return collection;
}

function isEmpty(value) {
    return (value === "" || value === null || value === undefined);
}

function isTracksProperty(property) {
    return (property === "tracks");
}

function recordHasProperty(record, property) {
    return record.hasOwnProperty(property);
}
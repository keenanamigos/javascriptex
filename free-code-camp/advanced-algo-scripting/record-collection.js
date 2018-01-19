// Setup
const collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
const collectionCopy = JSON.parse(JSON.stringify(collection));

// Solution
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

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

/* Test Cases */
/**
 * After updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"
 * After updateRecords(5439, "tracks", "Take a Chance on Me"), tracks should have "Take a Chance on Me" as the last element.
 * After updateRecords(2548, "artist", ""), artist should not be set
 * After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love" as the last element.
 * After updateRecords(2468, "tracks", "Free"), tracks should have "1999" as the first element.
 * After updateRecords(2548, "tracks", ""), tracks should not be set
 */
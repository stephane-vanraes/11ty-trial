const removeCurrent = page => item => item.inputPath !== page.inputPath;
const setWeight = tags => item => {
    item.data.weight = item.data.tags.filter(t => tags.includes(t)).length;
    return item;
}
const removeTag = tag => item => {
    item.data.tags = item.data.tags.filter(t => t !== tag);
    return item
}

module.exports = {
    removeCurrent,
    removeTag,
    setWeight
}
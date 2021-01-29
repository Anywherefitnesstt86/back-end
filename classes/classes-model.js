const db = require("../data/config")

function getClasses() {
    return db('classes')
}

function getClassesByID(id) {
    return db('classes')
        .where({id})
        .first()
}

async function updateClassesByID(id, changes) {
	await db("classes")
		.where({ id })
		.update(changes)

	return getClassesByID(id)
}

function addClass(newClass) {
    return db('classes')
        .insert(newClass)
}

function removeClass(id) {
    return db('classes')
        .where({ id })
        .del()
}

module.exports = {
	getClasses,
	getClassesByID,
	updateClassesByID,
    addClass,
    removeClass,
}
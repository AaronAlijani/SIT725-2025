const catList = [
    {
        title: 'Kitten 1',
        image: 'images/kitten-1.jpg',
        link: 'About Kitten 1',
        description: 'Demo description for Kitten 1'
    },
    {
        title: 'Kitten 2',
        image: 'images/kitten-2.jpg',
        link: 'About Kitten 2',
        description: 'Demo description for Kitten 2'
    },
    {
        title: 'Kitten 3',
        image: 'images/kitten-3.jpg',
        link: 'About Kitten 3',
        description: 'Demo description for Kitten 3'
    }
];

// Function to get all cats
const getAllCats = () => {
    return catList;
}

module.exports = {
    getAllCats
};
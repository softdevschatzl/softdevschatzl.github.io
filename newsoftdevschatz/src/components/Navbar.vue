<template>
    <nav>
        <ul>
            <li><a href = "#">Home</a></li>
            <li><a href = "#">About</a></li>
            <li><a href = "#">Portfolio</a></li>
            <li><a href = "#">Contact</a></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    background: #333;
    padding: 1em;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
}

nav a {
    color: white;
    text-decoration: none;
}
</style>

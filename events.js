select {
    color: rgb(212, 94, 203);
    width: 10rem;
    cursor: pointer;
    padding: 1rem;
}

.select::after {
    content:"\25BC";
    position: absolute;
    background: rgb(129, 17, 120);
    top: 0;
    right: 0;
    padding: 1rem;
    pointer-events: none;
}
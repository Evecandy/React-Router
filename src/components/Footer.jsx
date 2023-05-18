

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%", borderTop: "1px solid black", paddingTop: "5px" }}>Footer © {year}</div>
    )
}

export default Footer
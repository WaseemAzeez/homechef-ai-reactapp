import logo from "../assets/gettyimages-crop.png"; // adjust path based on file location

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>Home Chef</h1>
        </header>
    );
}

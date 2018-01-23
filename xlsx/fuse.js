const {
	FuseBox,
	WebIndexPlugin
} = require("fuse-box");

const fuse = FuseBox.init({
	homeDir: "src",
	output: "dist/$name.js",
	target: "browser",
	plugins: [
		WebIndexPlugin(),
	]
});

fuse.dev();

fuse.bundle("app")
	.watch()
	.hmr()
	.instructions(" > index.ts");
fuse.run();
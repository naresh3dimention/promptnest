const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const tool = tools.find(t => t.id === id);

const container = document.getElementById("toolDetails");

if (!tool) {
    container.innerHTML = `
        <h1>Tool Not Found</h1>
        <p>The requested AI Tool does not exist.</p>
    `;
}
else {

container.innerHTML = `

<img
src="${tool.logo}"
class="tool-logo"
alt="${tool.name}">

<h1>${tool.name}</h1>

<p class="tool-description">
${tool.description}
</p>

<div class="tool-info">

<div class="info-box">
⭐
<h3>${tool.rating}</h3>
</div>

<div class="info-box">
💰
<h3>${tool.price}</h3>
</div>

<div class="info-box">
🏷
<h3>${tool.category}</h3>
</div>

</div>

<h2>Official Website</h2>

<a
href="${tool.website}"
target="_blank"
class="btn">
Visit ${tool.name}
</a>

`;

}
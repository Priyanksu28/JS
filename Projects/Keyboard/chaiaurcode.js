const insert = document.querySelector('#insert');

window.addEventListener('keydown', (value) => {
  insert.innerHTML = `
    <div class = "color">
      <table>
        <tr>
          <th>key</th>
          <th>keycode</th>
          <th>code</th>
        </tr>
        <tr>
          <td>${value.key === ' ' ? 'space' : value.key}</td>
          <td>${value.keyCode}</td>
          <td>${value.code}</td>
        </tr>
      </table>
    </div>
  `;
});

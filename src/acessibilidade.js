// Para elementos clicáveis que não são <button>/<a>: funcionam também pelo teclado (Enter ou espaço) e são
// anunciados como botão por leitores de tela.
export function clicavel(acao, rotulo) {
  return {
    role: 'button',
    tabIndex: 0,
    'aria-label': rotulo,
    onClick: acao,
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        acao();
      }
    },
  };
}

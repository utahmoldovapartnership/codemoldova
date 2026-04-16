/** Home page. Pexels (`pexels.com/license`). */
const q = 'auto=compress&cs=tinysrgb&w=1600'

function px(id) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?${q}`
}

export const homePhotos = {
  coding: px(7988747),
  collaboration: px(1181263),
  outcomes: px(3861959),
  team: px(8199132),
}

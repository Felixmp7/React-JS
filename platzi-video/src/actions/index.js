
export function openModal(mediaID){
  return {
    type: 'OPEN_MODAL',
    payload: {
      mediaID
    }
  }
}

export function closeModal(){
  return {
    type: 'CLOSE_MODAL',
  }
}

export function searchVideo(query){
  return {
    type: 'SEARCH_VIDEO',
    payload: {
      query
    }
  }
}

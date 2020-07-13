export const animate = (callback, duration) =>
  new Promise(resolve => {
    const startTime = performance.now()
    const handleFrame = time => {
      const progress = (time - startTime) / duration
      if (progress >= 1) {
        callback(1)
        resolve()
      } else {
        callback(Math.max(0, progress))
        requestAnimationFrame(handleFrame)
      }
    }
    requestAnimationFrame(handleFrame)
  })

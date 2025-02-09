import { DateTime } from 'luxon'
import { useState, useEffect } from 'react'

export default function useGetTimeProgramming() {
  const [timeProgramming, setTimeProgramming] = useState(
    calculateTimeProgramming()
  )

  function calculateTimeProgramming() {
    const now = DateTime.now()
    const dateStartedProgramming = DateTime.fromISO('2018-10-01')
    const timeProgramming = now.diff(dateStartedProgramming, [
      'years',
      'months',
      'days',
    ])

    const { years, months, days } = timeProgramming.toObject()
    const dataeStartedFirstJob = DateTime.fromISO('2019-04-01')

    const timeWorking = now.diff(dataeStartedFirstJob, ['years', 'months'])
    const { years: yearsWorking } = timeWorking

    return {
      yearsWorking,
      years,
      months,
      days: days ? Math.ceil(days) : days,
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeProgramming(calculateTimeProgramming())
    }, 86400000)

    return () => clearTimeout(timeout)
  })

  return timeProgramming
}

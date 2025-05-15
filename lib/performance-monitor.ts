interface PerformanceMetrics {
  fcp: number
  lcp: number
  fid: number
  cls: number
  ttfb: number
}

interface PerformanceEntry {
  name: string
  entryType: string
  startTime: number
  duration: number
  toJSON(): Record<string, unknown>
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  }

  constructor() {
    this.init()
  }

  private init() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list: PerformanceObserverEntryList) => {
        for (const entry of list.getEntries()) {
          this.handleEntry(entry as PerformanceEntry)
        }
      })

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] })
    }
  }

  private handleEntry(entry: PerformanceEntry) {
    switch (entry.name) {
      case 'first-contentful-paint':
        this.metrics.fcp = entry.startTime
        break
      case 'largest-contentful-paint':
        this.metrics.lcp = entry.startTime
        break
      case 'first-input':
        this.metrics.fid = entry.duration
        break
      case 'layout-shift':
        this.metrics.cls += entry.duration
        break
      case 'navigation':
        this.metrics.ttfb = entry.duration
        break
    }
  }

  public getMetrics(): PerformanceMetrics {
    return this.metrics
  }
}

export const performanceMonitor = new PerformanceMonitor() 
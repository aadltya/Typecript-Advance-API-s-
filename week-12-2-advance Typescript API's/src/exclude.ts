type EventType = 'scroll' | 'click' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'click'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling: ${event}`);
}

// handleEvent('click');  throws error
handleEvent('scroll');  
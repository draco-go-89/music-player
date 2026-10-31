export default function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const city = decodeURIComponent(req.headers['x-vercel-ip-city'] || 'Unknown');
    const region = req.headers['x-vercel-ip-country-region'] || '';
    const country = req.headers['x-vercel-ip-country'] || 'Unknown';
    const postal = req.headers['x-vercel-ip-postal-code'] || 'N/A';
    const coords = `${req.headers['x-vercel-ip-latitude'] || '?'}, ${req.headers['x-vercel-ip-longitude'] || '?'}`;
    const ua = req.headers['user-agent'];

    // Parse body safely (handles both fetch JSON and sendBeacon text payloads)
    let client = req.body || {};
    if (typeof client === 'string') {
        try { client = JSON.parse(client); } catch (e) { client = {}; }
    }

    // 1. Log Clicks & Media Plays
    if (client.type === 'INTERACTION') {
        console.log(
            `ACTION -> IP: ${ip} (${city}, ${region}) | ${client.action} | ` +
            `Scroll: ${client.scrollDepth} | Time on Page: ${client.timeElapsed}`
        );
        return res.status(200).json({ logged: true });
    }

    // 2. Log Page Exit / Tab Switch
    if (client.type === 'EXIT') {
        console.log(
            `EXIT -> IP: ${ip} (${city}, ${region}) | Max Scroll: ${client.scrollDepth} | ` +
            `Total Time Spent: ${client.totalTime}`
        );
        return res.status(200).json({ logged: true });
    }

    // 3. Default: Log Initial Page Visit (Your exact existing format)
    console.log(
        `VISITOR -> IP: ${ip} | Loc: ${city}, ${region}, ${country} (PIN: ${postal} / GPS: ${coords}) | ` +
        `Model: ${client.model || 'N/A'} | Screen: ${client.screen || 'N/A'} | ` +
        `HW: ${client.cores || '?'} Cores, ${client.ram || '?'} RAM, GPU: ${client.gpu || 'N/A'} | ` +
        `Battery: ${client.battery || 'N/A'} | Net: ${client.network || '?'} | From: ${client.referrer || 'Direct'} | UA: ${ua}`
    );

    res.status(200).json({ logged: true });
}
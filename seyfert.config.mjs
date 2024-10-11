import { config } from 'seyfert';
import 'jsr:@std/dotenv/load';

export default config.bot({
    locations: {
        base: 'src',
        output: 'src',
    },
    token: 'token',
});

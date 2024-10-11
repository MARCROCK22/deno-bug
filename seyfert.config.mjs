import { config } from 'seyfert';
// if you comment this, the code executes normally
import 'jsr:@std/dotenv/load';
// works in v1.46.3

export default config.bot({
    locations: {
        base: 'src',
        output: 'src',
    },
    token: 'token',
});

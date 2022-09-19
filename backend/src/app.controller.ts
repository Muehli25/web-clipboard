import {Body, Controller, Get, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {Transfer} from './model/transfer.dto';

@Controller("api")
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getClipboard(): Transfer {
        return this.appService.getClipboard();
    }

    @Post()
    setClipboard(@Body() transferDto: Transfer): Transfer {
        return this.appService.setClipboard(transferDto.clipboard);
    }

    // @Delete()
    // deleteClipboard(@Body() clipboard: ClipboardDTO): string {
    //   return this.appService.setClipboard(clipboard.text);
    // }
}
